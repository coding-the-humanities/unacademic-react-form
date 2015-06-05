class Resource {
  constructor(){
    this.title = "";
    this.author = "";
    this.url = "";
    this.clarity = 0;
    this.difficulty = 0;
    this.uptodateness = 0;
    this.pertinence = 0;
    this.enjoyment = 0;
    this.time_to_digest = 0;
    this.tags = ["","","","",""];
    this.type = "";
  }
}

class Checkpoint {
  constructor() {
    this.title = "";
    this.introduction = "";
    this.resources = [new Resource];
    this.instructions = [""];
  };
};

class Waypoint {
  constructor(curator) {
    this.title = "";
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
    this.institution = ""; 
    this.waypoints = [new Waypoint(name)];
  };
};

export default { Resource: Resource, Checkpoint: Checkpoint, Waypoint: Waypoint, User: User};


