package Exercicio2;

class Escola {
    private String nome, CNPJ;
    private Endereco endereco;
    private Departamento[] departamentos;
    private Aluno[] discentes;
    private int nr_discentes, nr_departamentos;

    public Escola(String nome, String CNPJ, Endereco endereco) {
        this.nome = nome;
        this.CNPJ = CNPJ;
        this.endereco = endereco;
        this.departamentos = new Departamento[10];
        this.discentes = new Aluno[1000];
        this.nr_departamentos = 0;
        this.nr_discentes = 0;
    }

    public void criarDepartamento(String nomeDepartamento) {
        if (nr_departamentos < 10) {
            departamentos[nr_departamentos] = new Departamento(nomeDepartamento);
            nr_departamentos++;
        } else {
            System.out.println("Nao e possivel criar outro Departamento.");
        }
    }

    public void matricularAluno(Aluno novoAluno) {
        if (nr_discentes < 1000) {
            discentes[nr_discentes] = novoAluno;
            nr_discentes++;
        } else {
            System.out.println("Nao e possivel matricular mais alunos.");
        }
    }
}