var model = {
    resource: {
        "id": 1,
        "title": "",
        "author": "",
        "url": ""
    },
    checkpoint: {
        "id": 1,
        "title": "",
        "description": [
            ""
        ],
        "resources": [this.resource]
    },
    waypoint: {
        "id": 1,
        "title": "",
        "image": "http://lorempixel.com/640/480/nature",
        "curator": "Yeehaa",
        "summary": "",
        "description": [
            ""
        ],
        "checkpoints": [this.checkpoint]
    },
    user: {
        "id": "",
        "email": "",
        "name": "",
        "waypoints": [this.waypoint]
    }
};

export default model;