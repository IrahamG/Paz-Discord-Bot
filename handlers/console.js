module.exports = (client) => {
    let prompt = process.openStdin()
    prompt.addListener('data', res => {
        let x = res.toString().trim().split(/ +/g)
        client.channels.get(671899711992496162).send(x.join(" "));
    })
}