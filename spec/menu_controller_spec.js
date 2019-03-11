const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {
<<<<<<< HEAD
    describe("#getContactCount()", () => {
 
=======

>>>>>>> Contacts-and-Database-Checkpoint
    beforeEach(() => {
        this.menu = new MenuController();
    });


 // #2
<<<<<<< HEAD
      it("should return 0 when no contacts are in the book", () => {
        expect(this.menu.getContactCount()).toBe(0);
      });
      it("should return 1 when there is exactly one contact in the book", () => {
        this.menu.contacts.push("Bob");
        expect(this.menu.getContactCount()).toBe(1)
      });
=======
>>>>>>> Contacts-and-Database-Checkpoint
      it("should return Learning is a life-long pursuit", () => {
        expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
      });
    });
<<<<<<< HEAD
  });
=======
   
>>>>>>> Contacts-and-Database-Checkpoint
