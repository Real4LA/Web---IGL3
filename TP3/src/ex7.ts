function identity<T>(value: T): T {
  return value;
}

function etFirst<T>(arr: T[]): T {
  return arr[0];
}

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(item: T): void {
    this.items = this.items.filter((i) => i !== item);
  }

  getAll(): T[] {
    return this.items;
  }
}

interface ApiResponse<T> {
  data: T;
  error?: string;
}
