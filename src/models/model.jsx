class Resource {
  constructor(id){
    this.id = id;
    this.title = "";
    this.author = "";
    this.url = "";
  }
}

class Checkpoint {
  constructor(id) {
    this.id = id;
    this.title = "";
    this.description = "";
    this.resources = [new Resource(1)];
  };
};

class Waypoint {
  constructor(id, curator) {
    this.id = id;
    this.title = "";
    this.image = "";
    this.curator = curator;
    this.summary = "";
    this.description = "";
    this.checkpoints = [new Checkpoint(1)];
  };
};

class User {
  constructor(id, name, email){
    this.id = id;
    // this.email = email;
    this.name = name;
    this.waypoints = [new Waypoint(1, name)];
  };
};

export default { Resource: Resource, Checkpoint: Checkpoint, Waypoint: Waypoint, User: User};


