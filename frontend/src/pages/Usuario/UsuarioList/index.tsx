import { type IUsuario } from "../../../models/IUsuario"
import { Button } from "../../../components/Button"

interface UsuarioTableProps {
  usuarios: IUsuario[];
  onEdit: (usuario: IUsuario) => void;
  onDelete: (usuario: IUsuario) => void;
}

export const UsuarioList = (
    {usuarios, onEdit, onDelete}: UsuarioTableProps
) => {
    return (
        <>
            <div className="row p-3">
                <div className="col-12">
                    <h4>Lista de Usuários</h4>
                    <hr />
                    {usuarios.length === 0 ? (<p>Nenhum usuário encontrado.</p>) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.cpf}</td>
                                    <td>
                                        <Button onClick={() => onEdit(usuario)} variant="warning" value="Editar" />
                                        &nbsp;&nbsp;
                                        <Button onClick={() => onDelete(usuario)} variant="danger" value="Excluir" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    )}
                </div>
            </div>
        </>
    )
}