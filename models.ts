interface IDB {
    connect(): boolean;
    disconnect(): boolean;
    getConnection(): Connection;
  }

  

  interface IRowInstance {
    id: number;
    update(): boolean;
    delete(): boolean;
  }

  interface ITable {
    name: string;
    select(): IRow[];
    create(): IRow;
  }

  interface IColumn {
    name: string;
    type: string;
  }
  interface IRow {
    id: number;
    key: string
  }

  interface IRelationship {
    fromTable: string;
    fromColumn: string;
  
  }

  interface IDatabaseSchema {
    tables: ITable[];
    relationships: IRelationship[];
  }

  interface ITable {
    name: string;
    columns: IColumn[];
    rows: IRow[];
    select(): IRow[];
    create(row: IRow): IRow;
  }
