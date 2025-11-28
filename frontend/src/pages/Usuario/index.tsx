import { UsuarioForm } from "./UsuarioForm"
import { UsuarioList } from "./UsuarioList"
import type { IUsuario } from "../../models/IUsuario"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { UsuariosService } from "../../services/usuarioService"


export const UsuarioPage = () => {
    const [listaUsuarios, setListaUsuarios] = useState<IUsuario[]>([])
    const [usuario, setUsuario] = useState<IUsuario | null>(null)

    // Handlers Save, Edit e Delete
    const handleSave = (usuario: IUsuario) => {
        if (usuario.id && usuario.id !== "0") {
            // Atualiza o usuário na API
            UsuariosService.update(usuario.id, usuario).then(updatedUsuario => {
                // Atualiza a lista de usuários no estado
                setListaUsuarios(currentUsers =>
                    currentUsers.map(u => (u.id === usuario.id ? updatedUsuario : u))
                );
                setUsuario(null); // Limpa o formulário
            }).catch(error => {
                console.error("Erro ao atualizar usuário:", error);
            });
        } else if(usuario.nome !== "" && usuario.cpf !== "") {
            // Cria um novo usuário
            const novoUsuarioComId = { ...usuario, id: uuidv4() };
            UsuariosService.create(novoUsuarioComId).then(novoUsuarioSalvo => {
                setListaUsuarios(usuariosAtuais => [...usuariosAtuais, novoUsuarioSalvo]);
                setUsuario(null); // Limpa o formulário
            }).catch(error => {
                console.error("Erro ao salvar usuário:", error);
            });
        }
    }
    const handleEdit = (usuario: IUsuario) => {
        setUsuario(usuario);
    }

    const handleDelete = (usuario: IUsuario | null) => {
        // Lógica para excluir o usuário
            if (usuario && usuario.id) {
                UsuariosService.delete(usuario.id).then(() => {
                    // Remove o usuário da lista no estado
                    setListaUsuarios(currentUsers =>
                        currentUsers.filter(u => u.id !== usuario.id)
                    );
                    setUsuario(null); // Limpa o formulário
                }).catch(error => {
                    console.error("Erro ao excluir usuário:", error);
                });
            }
    }
    const handleCancel = () => {
        // Lógica para cancelar a operação
        setUsuario(null);
    }
    useEffect(() => {
        // Carregar a lista de usuários ao montar o componente
        UsuariosService.getAll().then(data => setListaUsuarios(data))

    }, [])
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <UsuarioForm 
                            usuario={usuario} 
                            onSave={handleSave} 
                            onCancel={handleCancel} 
                    />
                </div>
                <div className="col-8 p-3">
                    <UsuarioList 
                            usuarios={listaUsuarios} 
                            onEdit={handleEdit} 
                            onDelete={handleDelete} 
                    />
                </div>
            </div>
        </>
    )
}