/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const listTodos2 = /* GraphQL */ `
  query ListTodos2(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos2(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const listTodos3 = /* GraphQL */ `
  query ListTodos3(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos3(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
