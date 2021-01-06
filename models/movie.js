exports = module.exports = function (app, mongoose) {

    var movieSchema = new mongoose.Schema({
        id: { type: String },
        name: { type: String },
        genre: { type: Number }
    });

    mongoose.model('movie', movieSchema);
};