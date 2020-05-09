class Stars {
    constructor(numStars) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.xx = Math.random() * canvas.width / 2;
        this.yy = Math.random() * canvas.height / 2;
        this.zz = Math.random() * canvas.width * 2;
        this.numStars = numStars;
    }

    initStars(massive) {
        for (let i = 0; i < this.numStars; i++) {
            massive.push(new Stars());
        }
    }

    move(massive) {
        for (let i = 0; i < massive.length; i++) {
            massive[i].z--;
            if (massive[i].z <= 0) massive[i].z = canvas.width;
        }
    }

    random() {
        let num = '123456789ABCDF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += num[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    drawArcStroke(massive) {
        let sx, sy, sr;
        for (let i = 0; i < massive.length; i++) {
            sx = (massive[i].xx - massive[i].x) * (massive[i].z / massive[i].zz);
            sy = (massive[i].y - massive[i].yy) * (massive[i].zz / massive[i].z);
            sr = 1 * (massive[i].zz / massive[i].z);

            sx += massive[i].xx;
            sy += massive[i].yy;

            ctx.beginPath();
            ctx.strokeStyle = this.random();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = this.random();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();

        }
    }
}