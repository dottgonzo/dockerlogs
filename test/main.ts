import { expect } from "chai"
import { Dockerlogs } from "../index"



describe("Docker", function () {
    describe("check the class", function () {

        it("configuration", function () {

            const Docker = new Dockerlogs();
            expect(Docker).to.be.ok
        })
    })
})