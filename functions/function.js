exports.handler = async (event, context) => {
    console.log('function ran')

    const data = {
        "id": 1,
        "lorem_name": "in libero",
        "lorem_body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam"
    }

    // return response to browser
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}