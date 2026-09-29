const { validateStatus } = require('./todoValidator');
const AppError = require('./appError');
class APIFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  archive() {
    const { archived } = this.queryString;
    if (archived == 'true') {
      this.query = this.query.filter((todo) => todo.archived == true);
    } else if (archived === 'all') {
    } else {
      this.query = this.query.filter((todo) => !todo.archived);
    }
    return this;
  }

  filter() {
    const { status } = this.queryString;
    if (status) {
      validateStatus(status);
      this.query = this.query.filter((todo) => todo.status === status);
    }
    return this;
  }

  sort() {
    const { sort } = this.queryString;

    if (!sort) {
      this.query.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'newest') {
      this.query.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'oldest') {
      this.query.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else {
      throw new AppError(
        `Invalid sort value. Must be 'newest' or 'oldest'`,
        400,
      );
    }

    return this;
  }
  limitFields() {
    const { fields } = this.queryString;
    if (fields) {
      // eslint-disable-next-line prettier/prettier
      const fieldList = fields.split(',').map((f) => f.trim());
      this.query = this.query.map((todo) => {
        const selectedTodo = {};
        fieldList.forEach((field) => {
          if (todo[field] !== undefined) {
            selectedTodo[field] = todo[field];
          }
        });
        return selectedTodo;
      });
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.slice(skip, skip + limit);

    return this;
  }
}

module.exports = APIFeature;
