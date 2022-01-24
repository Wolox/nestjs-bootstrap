import bootstrap from './infrastructure/application';
import packageJson from './common/helpers/packageJson';
import { AppModule } from './app.module';

const { NODE_ENV } = process.env;

bootstrap({ AppModule, NODE_ENV, packageJson });
