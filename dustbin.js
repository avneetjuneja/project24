class DustBin {
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.Bodyb = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.Bodyb);
        this.body1 = Bodies.rectangle((x- (width/2)), (y- (height*2)), )
        World.add(world, this.body1);
        this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2, options);
        world.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height
    }
    display() {
        fill("white");
        rect(this.bodyb.position.x, this.bodyb.position.y, this.bodyb.width, this.bodyb.height)
        rect((this.bodyb.position.x-(this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100))), this.bodyb.height, this.bodyb.width/2))
    }
