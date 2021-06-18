const domainName = (url) => {
  const noProtocol = url.replace(/https?:\/\//gi, "");
  const noSubdomain = noProtocol.replace(/www\./gi, "");
  const noPath = noSubdomain.replace(/\/.*/gi, "");
  const noPort = noPath.replace(/:.*/gi, "");
  const noTopLevelDomain = noPort.replace(/\..*/gi, "");
  const result = noTopLevelDomain;

  return result;
};

module.exports = domainName;
