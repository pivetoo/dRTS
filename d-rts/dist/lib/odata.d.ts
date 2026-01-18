import { ODataParams, PaginationParams } from '../types/odata';
export declare class ODataHelper {
    static buildQuery(params: ODataParams): string;
    static fromPaginationParams(params: PaginationParams): ODataParams;
    static createSearchFilter(searchTerm: string, fields: string[]): string;
    static createBooleanFilter(field: string, value: boolean): string;
    static createDateFilter(field: string, operator: 'eq' | 'gt' | 'lt' | 'ge' | 'le', date: Date): string;
    static combineFilters(filters: string[], operator?: 'and' | 'or'): string;
    static extractData<T>(response: any): T[];
    static extractCount(response: any): number;
    static processResponse<T>(response: any, params?: {
        page?: number;
        pageSize?: number;
    }, mapFn?: (item: any) => T): {
        data: T[];
        total: number;
        page?: number;
        pageSize?: number;
    };
}
