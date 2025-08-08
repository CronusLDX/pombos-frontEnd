// No mongoDb, para definir o id do objeto manualmente, adicionamos a sintaxe "_id"
// essa função serve para converter o "_id" em "id", para o front-end mais padrão
export function convertId<T extends { _id?: string }>(
  data: T | T[]
): (T & { id: string }) | (T & { id: string })[] {
  if (Array.isArray(data)) {
    return data.map(item => ({
      ...item,
      id: item._id || '',
    }));
  } else {
    return {
      ...data,
      id: data._id || '',
    };
  }
}
