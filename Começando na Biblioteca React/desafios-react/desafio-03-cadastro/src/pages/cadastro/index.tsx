import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {
  Column,
  Container,
  FazerLoginText,
  JaTenhoText,
  Row,
  SubtitleText,
  Title,
  TitleText,
  Wrapper,
} from "./styles";
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é valido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Cadastro = () => {
  const { handleLogin } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    handleLogin(formData);
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleText>Comece agora grátis</TitleText>
            <SubtitleText>Faça seu login e make the change._</SubtitleText>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="nome"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <SubtitleText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleText>
              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Row>
              <JaTenhoText>Esqueci minha senha</JaTenhoText>
              <FazerLoginText>Criar Conta</FazerLoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };
