import { IUsuario } from "./iusuario.interface";

export interface IResponse {
    totalPages: number;
    results: IUsuario[];
    meta: IMeta;
    links: ILink;
}

export interface IMeta {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}

export interface ILink {
    first: string;
    previous: string;
    next: string;
    last: string;
}
