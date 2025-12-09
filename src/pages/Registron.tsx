import styled from "styled-components";
import { Form } from "../components/molecules/Form";
import { Input } from "../components/atoms/Imput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Table } from "antd";

interface FormData {
  name: string;
  phone: number;
  email: string;
  question: string;
}

const ErrorMessage = styled.span`
  color: ${(props) => props.theme["red-300"]};
  font-size: 0.875rem;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const ResultsBox = styled.div`
  margin-top: 20px;
  background: ${(props) => props.theme["gray-100"]};
  color: black;
  padding: 15px;
  border-radius: 8px;
  width: 500px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;

  font-size: 1rem;
  font-family: inherit;
  color: #333;

  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;

  resize: vertical;

  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Pergunta",
    dataIndex: "question",
    key: "question",
  },
];

export const Registron = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [registros, setRegistros] = useState<FormData[]>([]);
  const [showInfo, setShowInfo] = useState(false);

  const onSubmit = (data: FormData) => {
    setRegistros((prev) => [...prev, data]);
    setShowInfo(true);
    reset();
  };

  return (
    <Container>
      <h1>Registron Page</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <div style={{ width: "100%" }}>
            <Input
              placeholder="Primeiro Nome:"
              {...register("name", { required: "Nome obrigatório" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div style={{ width: "100%" }}>
            <Input
              placeholder="11 99999-9999"
              {...register("phone", { required: "Phone obrigatório" })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>
        </Row>
        <Input
          type="email"
          placeholder="Email: joao@email.com"
          {...register("email", { required: "Email obrigatório" })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <StyledTextarea
          placeholder="Pergunte algo Sobre programação"
          {...register("question", { required: "Pergunta obrigatória" })}
        />

        {errors.question && (
          <ErrorMessage>{errors.question.message}</ErrorMessage>
        )}
        <button type="submit">Enviar</button>
      </Form>

      {showInfo && (
        <ResultsBox>
          <h3>Informações Digitadas</h3>

          <Table
            columns={columns}
            dataSource={registros.map((item, index) => ({
              key: index,
              ...item,
            }))}
            pagination={false}
            bordered
            style={{ marginTop: "10px" }}
          />
        </ResultsBox>
      )}
    </Container>
  );
};
