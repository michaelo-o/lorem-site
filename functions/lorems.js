
exports.handler = async (event, context) => {
    const lorems = [
        {
            "id": 1,
            "lorem_name": "in libero",
            "lorem_body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam"
        },
        {
            "id": 2,
            "lorem_name": "erat id mauris",
            "lorem_body": "nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at"
        },
        {
            "id": 3,
            "lorem_name": "sodales",
            "lorem_body": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus"
        },
        {
            "id": 4,
            "lorem_name": "nisl aenean lectus",
            "lorem_body": "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius"
        },
        {
            "id": 5,
            "lorem_name": "sed accumsan",
            "lorem_body": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy"
        },
        {
            "id": 6,
            "lorem_name": "nulla ac enim",
            "lorem_body": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus"
        },
        {
            "id": 7,
            "lorem_name": "mus etiam vel",
            "lorem_body": "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla"
        },
        {
            "id": 8,
            "lorem_name": "rutrum rutrum neque",
            "lorem_body": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at"
        },
        {
            "id": 9,
            "lorem_name": "magna",
            "lorem_body": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non"
        },
        {
            "id": 10,
            "lorem_name": "quam suspendisse potenti",
            "lorem_body": "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer"
        }
    ]

    if (context.clientContext.user) { //this contains info about the context of the client making the request. i.e browser 
        // fetch data & then return
        return {
            statusCode: 200, //status code 200 means everything is all right
            body: JSON.stringify(lorems)
        }
    }

    // return error status
    return {
        statusCode: 401,  // this means unauthenticated i.e, you arent signed in
        body: JSON.stringify({ mssg: 'ah ah ah, you must be logged into see this' })
    }

}