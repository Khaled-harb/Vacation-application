package net.talaatharb.invoicetracker.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class User {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String nationalId;

	@NotBlank
	private String englishName;

	@NotBlank
	private String arabicName;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(min = 8, max = 120)
	private String password;

	@NotBlank
	private String englishAddress;

	@NotBlank
	private String arabicAddress;

	@NotBlank
	private int allowedBalance;

	@NotBlank
	private int remainingBalance;

	@NotBlank
	private boolean billable;

	@NotBlank
	private boolean isDisabled;

	private boolean isResigned;

	@NotBlank
	private Date joiningDate;

	private Date endDate;

	@NotBlank
	private Date birthDate;

	private String imgUrl;

	private String mobileNumber;

	@NotBlank
	private boolean isFullTime;

	private Date insuranceDate;

	private int yearsOfInsurance;

	private int overtime;

	private double payRate;

	private Boolean isEnabled;

	private Date lastTimePasswordChanged;

	@ManyToMany
	private List<Team> teams;


	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(
			mappedBy = "reviewedBy",
			cascade= CascadeType.ALL,
			orphanRemoval = true
	)
	private List<Request> requests = new ArrayList<>();

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	@NotBlank
	@Size(max = 20)
	private String username;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private ResetTokenEntity resetToken;

	public User(String username, String email, String encode) {
		this.username = username;
		this.email = email;
		this.password = encode;
	}
}
