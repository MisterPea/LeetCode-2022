/**
 * Given a string queryIP, return "IPv4" if IP is a valid IPv4 address,
 * "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
 * 
 * A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain
 * leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00",
 * and "192.168@1.1" are invalid IPv4 addresses.
 * 
 * A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
 * 1 <= xi.length <= 4 - xi is a hexadecimal string which may contain digits, lowercase English letter
 * ('a' to 'f') and upper-case English letters ('A' to 'F').
 * Leading zeros are allowed in xi.
 * For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses,
 * while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.


 */
function validIPAddress(queryIP) {
  const ipv4 = queryIP.split('.');
  const ipv6 = queryIP.split(':');
  if (ipv4.length === 4) {
    for (let i = 0; i < ipv4.length; i += 1) {
      const IPv4regTest = '^[0-9]+$';
      const IPv4regex = new RegExp(IPv4regTest, 'g');
      if (ipv4[i].length > 1 && ipv4[i][0] === '0') {
        return 'Neither';
      }
      if (IPv4regex.test(ipv4[i]) === false || +ipv4[i] > 255) {
        return 'Neither';
      }
    }
    return 'IPv4';

  } else if (ipv6.length === 8) {
    const IPv6regTest = '^([0-9]|[a-f]|[A-F])+$';
    const IPv6regex = new RegExp(IPv6regTest);

    for (const chunk of ipv6) {
      if (chunk.length > 4 || chunk.length < 1) {
        return 'Neither';
      }
      if (IPv6regex.test(chunk) === false) {
        return 'Neither';
      }
    };
    return 'IPv6';

  } else {
    return 'Neither';
  }
}

// str = "2e5.4.56.6"; // !valid
// str = '2001:cdbe:0000:0000:0000:0000:3257:9652'; // valid
str = '2001:cdbh:0000:0000:0000:0000:3257:9652'; // !valid
// str = '192.168.1.0'; // valid
console.log(validIPAddress(str));