import sys, json, subprocess
url, path, fields = sys.argv[1], sys.argv[2], json.loads(sys.argv[3])
cmd = ['curl', '-sS', '-o', '/dev/stderr', '-w', '%{http_code}', url]
for k, v in fields.items():
    cmd += ['-F', f'{k}={v}']
cmd += ['-F', f'file=@{path};type={fields.get("Content-Type","application/octet-stream")}']
r = subprocess.run(cmd, capture_output=True, text=True)
print('HTTP', r.stdout, r.stderr[:300])
