import { useEffect, useState } from "react";
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import type { IUsuario } from "../../../models/IUsuario"

interface UsuarioFormProps {
    usuario: IUsuario | null;
    onSave: (usuario: IUsuario) => void;
    onCancel: () => void;
}

export const UsuarioForm = (
    { usuario, onSave, onCancel }: UsuarioFormProps

) => {
    const [usuarioState, setUsuarioState] = useState<IUsuario>(usuario || { id: "", nome: '' , cpf: '' })

    const limparFormulario = () => {
        setUsuarioState({ id: "", nome: '', cpf: '' })
    }
    

    useEffect(() => {
        if (usuario)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUsuarioState(usuario)
        else
            limparFormulario()
    }, [usuario])


    return (
        <>
            <div className="card shadow mb-4 mt-4">
                <div className="card-body">
                    <h4 className="card-title">Usuário</h4>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="d-grid mb3">
                                    <Input  type="text" 
                                            id="nome" 
                                            label="Nome" 
                                            placeholder="Digite o nome" 
                                            onChange={(e) => setUsuarioState({...usuarioState, nome: e.target.value})} value={usuarioState.nome} 
                                    />
                                </div>
                                <div className="d-grid mb3">
                                    <Input 
                                            type="text" 
                                            id="cpf" 
                                            label="CPF" 
                                            placeholder="Digite o CPF" 
                                            onChange={(e) => setUsuarioState({...usuarioState, cpf: e.target.value})} value={usuarioState.cpf} 
                                    />
                                </div>
                            </form>
                            
                        </div>
                    </div>
                    <hr className="m-3"/>
                    <div className="row">
                        <div className="col-6 d-grid mb3">
                            <Button 
                                    type="button" 
                                    value="Cancelar" 
                                    variant="secondary" 
                                    onClick={() => {    onCancel(); limparFormulario();}} 
                            />
                        </div>
                        <div className="col-6 d-grid mb3">
                            <Button 
                                    type="submit" 
                                    value={usuario ? "Atualizar" : "Salvar"} 
                                    variant={usuario ? "success" : "primary" }
                                    onClick={() => {onSave(usuarioState); limparFormulario();}} 
                            />
                        </div>

                    </div>

                </div >
            </div >
        </>
    )
}