export type RelatorioProps = {
    id: string;
    link: string;
};

export default class RelatorioEntity {

    private constructor(private props: RelatorioProps) { }

    public static create(link: string): RelatorioEntity {
        return new RelatorioEntity({
            id: crypto.randomUUID().toString(),
            link
        });
    }

    public getId(): string {
        return this.props.id;
    }

    public getLink(): string {
        return this.props.link;
    }
}