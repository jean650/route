player.onChat("rue", function (num1) {
    mobs.spawn(CHICKEN, pos(10, 8, 7))
    agent.teleport(pos(2, 0, 0), EAST)
    agent.setItem(STRIPPED_CHERRY_LOG, 1, 1)
    for (let index = 0; index < 10; index++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
        gameplay.setDifficulty(HARD)
    }
})
