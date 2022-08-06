import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Primeiro Repo',
    description: 'Meu Repo',
    link: 'https://github.com'
}

export function Repository(){
    return(
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <br></br>
                <RepositoryItem repository={repository}/>
                <br></br>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}