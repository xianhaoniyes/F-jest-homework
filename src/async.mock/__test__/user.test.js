import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("axios");
jest.mock("../verify");
describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUserName = "my Username";
    const mockUserpassword = "my Password";
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => true);
    axios.post.mockImplementation(() => Promise.resolve({ data: {} }));
    await expect(register(mockUserName, mockUserpassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUserName = "my Username";
    const mockUserpassword = "my Password";
    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => false);
    await expect(register(mockUserName, mockUserpassword)).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
