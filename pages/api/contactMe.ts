export default function handler(
  req: { body: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { data: string }): void; new (): any };
    };
  }
) {
  const body = req.body;
  console.log(body);
}
