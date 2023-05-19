import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

fdescribe("mocked describes", () => {
  beforeEach(async () => {
    render(<MockThing />);
  });

  describe("mocked describes", () => {
    it("mocked tests", async () => {
      expect(screen.getByText("mock1")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock1")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock1")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock1")).toBeInTheDocument();
    });
  });

  describe("mocked describes", () => {
    beforeEach(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock2")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock2")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock2")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock2")).toBeInTheDocument();
    });

    it("mocked tests", async () => {
      expect(screen.getByText("mock2")).toBeInTheDocument();
    });

    describe("mocked describes", () => {
      beforeEach(async () => {
        await userEvent.click(screen.getByRole("button"));
      });

      it("mocked tests", async () => {
        expect(screen.getByText("mock3")).toBeInTheDocument();
      });

      it("mocked tests", async () => {
        expect(screen.getByText("mock3")).toBeInTheDocument();
      });

      describe("mocked describes", () => {
        beforeEach(async () => {
          await userEvent.click(screen.getByRole("button"));
        });

        it("mocked tests", async () => {
          expect(screen.getByText("mock4")).toBeInTheDocument();
        });

        describe("mocked describes", () => {
          beforeEach(async () => {
            await userEvent.click(screen.getByRole("button"));
          });

          it("mocked tests", async () => {
            expect(screen.getByText("mock5")).toBeInTheDocument();
          });

          it("mocked tests", async () => {
            expect(screen.getByText("mock5")).toBeInTheDocument();
          });

          describe("mocked describes", () => {
            beforeEach(async () => {
              await userEvent.click(screen.getByRole("button"));
            });

            it("mocked tests", async () => {
              expect(screen.getByText("mock6")).toBeInTheDocument();
            });

            it("dont navigate to this test", async () => {
              expect(screen.getByText("error")).toBeInTheDocument();
            });
          });
        });
      });
    });
  });
});

function MockThing() {
  const [value, setValue] = useState(1);
  return (
    <button
      type="button"
      onClick={() => setValue(value + 1)}
    >{`mock${value}`}</button>
  );
}
