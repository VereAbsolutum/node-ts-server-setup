import Person from "."

it("Should sum", () => {
  const person = new Person()

  expect(person.sayMyName()).toBe("MyName")
})
