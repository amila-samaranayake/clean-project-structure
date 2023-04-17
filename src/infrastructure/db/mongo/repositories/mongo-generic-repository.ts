import { FilterQuery, Model } from 'mongoose';
import { IGenericRepository } from 'src/core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  delete(id: string, item: T) {
    return this._repository.findByIdAndDelete(id, item);
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  getById(id: string): Promise<T> {
    return this._repository.findById(id).exec();
  }

  findOneBy(field: keyof T, value: any): Promise<T> {
    const query: FilterQuery<T> = { [field]: value } as FilterQuery<T>;
    return this._repository.findOne(query).exec();
  }

  findBy(field: keyof T, value: any): Promise<T[]> {
    const query: FilterQuery<T> = { [field]: value } as FilterQuery<T>;
    return this._repository.find(query).exec();
  }
}
