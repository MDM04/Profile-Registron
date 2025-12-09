import styled from "styled-components";
import { Form } from "../components/molecules/Form";
import { Input } from "../components/atoms/Imput";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  phone: number;
  email: string;
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
  width: 300px;
`;

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
    setRegistros((prev) => [...prev, data]); // Adiciona no array
    setShowInfo(true);
    reset(); // Limpa o form
  };

  return (
    <Container>
      <h1>Registron Page</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* NOME + PHONE LADO A LADO */}
        <Row>
          <div style={{ width: "100%" }}>
            <Input
              placeholder="Primeiro Nome:"
              {...register("name", { required: "Nome obrigatorio" })}
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          <div style={{ width: "100%" }}>
            <Input
              placeholder="11 99999-9999"
              {...register("phone", { required: "Phone obrigatorio" })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </div>
        </Row>

        {/* EMAIL ABAIXO */}
        <Input
          type="email"
          placeholder="Email: joao@email.com"
          {...register("email", { required: "Email obrigatorio" })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <button type="submit">Enviar</button>
      </Form>

      {/* LISTA DE REGISTROS */}
      {showInfo && (
        <ResultsBox>
          <h3>Informações Digitadas</h3>

          {registros.map((item, index) => (
            <div key={index} style={{ marginBottom: "12px" }}>
              <p>
                <strong>Nome:</strong> {item.name}
              </p>
              <p>
                <strong>Phone:</strong> {item.phone}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>

              {index < registros.length - 1 && (
                <hr style={{ margin: "10px 0" }} />
              )}
            </div>
          ))}
        </ResultsBox>
      )}
    </Container>
  );
};
