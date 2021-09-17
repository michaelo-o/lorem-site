
exports.handler = async (event, context) => {
    const lorems = [
        {
            "id": 1,
            "lorem_name": "in libero",
            "lorem_body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam"
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