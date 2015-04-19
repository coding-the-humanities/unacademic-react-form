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
    this.resources = new Resource(1);
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
    this.checkpoints = new Checkpoint(1);
  };
};

export default { Resource: Resource, Checkpoint: Checkpoint, Waypoint: Waypoint};


