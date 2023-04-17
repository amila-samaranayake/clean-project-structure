export abstract class IGenericRepository<T> {
  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);

  abstract delete(id: string, item: T);

  abstract getAll(): Promise<T[]>;

  abstract getById(id: string): Promise<T>;

  abstract findOneBy(field: keyof T, value: any): Promise<T>;

  abstract findBy(field: keyof T, value: any): Promise<T[]>;
}
