import { type IUsuario } from "../models/IUsuario";
// Sevice Usuario - Fetch API

// Service
export const UsuariosService = {
    // 1. Ajuste a URL completa do json-server
    URL: 'http://localhost:3001/usuarios',

    getAll: async (): Promise<IUsuario[]> => {
        const response = await fetch(UsuariosService.URL);
        if (!response.ok) throw new Error('Erro ao buscar usuários');
        return response.json();
    },

    getID: async (id: number | string): Promise<IUsuario> => {
        if (!id) throw new Error('ID inválido');
        
        const response = await fetch(`${UsuariosService.URL}/${id}`);
        if (!response.ok) throw new Error('Erro ao buscar usuário');
        return response.json();
    },

    // No Create, usamos Omit<'id'> pois o ID é gerado pelo servidor
    create: async (usuario: Omit<IUsuario, 'id'>): Promise<IUsuario> => {
        const response = await fetch(UsuariosService.URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        if (!response.ok) throw new Error('Erro ao criar usuário');
        return response.json();
    },

    // No Update, o 'Partial' permite enviar apenas os campos que mudaram (opcional)
    update: async (id: number | string, usuario: Partial<IUsuario>): Promise<IUsuario> => {
        if (!id) throw new Error('ID inválido para atualização');

        const response = await fetch(`${UsuariosService.URL}/${id}`, {
            method: 'PUT', // Use PATCH se quiser atualizar apenas campos parciais
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        if (!response.ok) throw new Error('Erro ao atualizar usuário');
        return response.json();
    },

    delete: async (id: number | string): Promise<void> => {
        if (!id) throw new Error('ID inválido para exclusão');

        const response = await fetch(`${UsuariosService.URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Erro ao excluir usuário');
        return response.json();
    }
};