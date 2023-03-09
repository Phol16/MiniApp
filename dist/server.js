import app from './index.js';
import mongoose from 'mongoose';
const port = process.env.PORT || 3000;
const dataBase = process.env.DATABASE;
mongoose.connect(`${dataBase}`).then(() => {
    app.listen(port, () => {
        console.log(`Application is listening to port:${port}`);
    });
});
//# sourceMappingURL=server.js.map