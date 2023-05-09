export function importRequire(code: string, location: string) {
  // return `import { createRequire } from "module";\nconst require = createRequire("${location}");\n` + code
  const preface = `
		import url from 'url';
		import { createRequire } from "module";
		const fileUrl = url.pathToFileURL(${JSON.stringify(location)});
		const require = createRequire(fileUrl);
	`.replace(/\s*\n\s*/gm, " ");
  return `${preface}\n${code}`;
}
