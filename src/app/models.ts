export type LicenseId = number;

export type User = {
  name: string;
  age: number;
  licenses: LicenseId[];
}

export type License = {
  id: number;
  name: string;
  description: string;
}

export type UserWithLicenses = Omit<User, "licenses"> & {licenses: License[]};