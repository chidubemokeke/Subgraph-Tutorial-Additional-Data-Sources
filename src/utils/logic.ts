// Importing necessary types and classes from the @graphprotocol/graph-ts library
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts";

// Convert the targets array (Address[]) from the event to an array of Bytes[]
// The targets field in the event parameters is of type Address[]
// You need to convert each Address[] to Bytes[].
// Function to convert an array of Address objects to an array of Bytes objects
export function convertAddressesToBytesArray(addresses: Address[]): Bytes[] {
  // Initialize an empty array to hold the converted Bytes objects
  let bytesArray: Bytes[] = [];
  // Loop through each Address in the input array
  for (let i = 0; i < addresses.length; i++) {
    // Convert the Address to a hex string, then to a Bytes object, and add it to the bytesArray
    bytesArray.push(Bytes.fromHexString(addresses[i].toHexString()));
  }
  // Return the array of Bytes objects
  return bytesArray;
}

// Function to return an array of BigInt objects as is
export function convertValuesToBigIntArray(values: BigInt[]): BigInt[] {
  // Directly return the input array without any modification
  return values; // No need to convert, just return the array as is
}

// Convert the calldatas array (Bytes[]) from the event to an array of Bytes[]
// Function to return an array of Bytes objects as is
export function convertCallDataToBytesArray(values: Bytes[]): Bytes[] {
  // Initialize an empty array to hold the Bytes objects
  let calldatasBytes: Bytes[] = [];
  // Loop through each Bytes object in the input array
  for (let i = 0; i < values.length; i++) {
    // Add each Bytes object to the calldatasBytes array
    calldatasBytes.push(values[i]);
  }
  // Return the array of Bytes objects
  return calldatasBytes;
}
// Convert the signature array (Strings[]) from the event to an array of Strings[]
// Function to convert an array of strings to an array of strings
export function convertStringsToStringsArray(strings: string[]): string[] {
  // Initialize an empty array to hold the strings
  let stringsArray: string[] = [];
  // Loop through each string in the input array
  for (let i = 0; i < strings.length; i++) {
    // Add each string to the stringsArray
    stringsArray.push(strings[i]);
  }
  // Return the array of strings
  return stringsArray;
}
