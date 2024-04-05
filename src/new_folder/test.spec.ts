import NewFolder from "@/new_folder/new_folder"

it("Should sum", () => {
  const test = new NewFolder()

  expect(test.log()).toBe(3)
})
