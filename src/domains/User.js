export default class User {
  constructor(name, email, active, id) {
    this.name = name || "";
    this.email = email || "";
    this.active = !!active;
    this.id = id || null;
  }
}