package Exercicio2;

public class Main {
    public static void main(String[] args) {
        // Criando o endereço e a escola para testar
        Endereco end = new Endereco("Rua das Faculdades", "100", "Nova Aliança");
        Escola minhaEscola = new Escola("Faculdade Estácio", "12.345.678/0001-90", end);

        // Testando a criação de departamento e matrícula de aluno
        minhaEscola.criarDepartamento("Ciência da Computação");

        Aluno aluno = new Aluno("Geise", 53);
        minhaEscola.matricularAluno(aluno);

        System.out.println("Execução do Exercício 2 realizada com sucesso!");
    }
}