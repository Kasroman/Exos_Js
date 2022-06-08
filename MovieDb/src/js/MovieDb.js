export class MovieDb {
    static apiKey = "c7bdda37a2ba81dce05c948bf57b042e";

    static async getInfos(id){
        let result;
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=fr-FR`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            result = data;
        });
        return result;
    }

    static async getTopRated(){
        let result;
        await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=fr-FR&page=1`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            result = data;
        });
        return result;
    }
}