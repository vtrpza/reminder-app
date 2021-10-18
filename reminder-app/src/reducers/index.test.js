const rewire = require("rewire")
const index = rewire("./index")
const reminder = index.__get__("reminder")
// @ponicode
describe("reminder", () => {
    test("0", () => {
        let callFunction = () => {
            reminder("REMOVE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reminder({ type: "RECEIVE_MESSAGE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reminder("remove")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reminder("discard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reminder({ type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reminder(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
