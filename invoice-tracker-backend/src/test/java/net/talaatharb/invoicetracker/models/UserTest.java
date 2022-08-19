package net.talaatharb.invoicetracker.models;

import net.talaatharb.invoicetracker.EqualityTest;

import java.util.HashSet;

public class UserTest implements EqualityTest<User> {

	@Override
	public User create() {
		return new User("a@a.com", 1L, "password", new HashSet<Role>(), "user");
	}

}
