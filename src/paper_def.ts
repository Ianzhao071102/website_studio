import {Author} from "./author_def";

export class Paper {
    public publish_timestamp: number;
    public authors: Author[] = [];
    public download_url:URL;
    public name:string;
    public details_url:string;
    public constructor(publish_timestamp:number, authors:Author[],download_url:URL,name:string,details_url:string) {
        this.publish_timestamp = publish_timestamp;
        this.authors = authors;
        this.download_url = download_url;
        this.name = name;
        this.details_url = details_url;
    }
}
